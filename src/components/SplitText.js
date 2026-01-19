import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText as GSAPSplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, GSAPSplitText, useGSAP);

const SplitText = ({
  text,
  className = '',
  delay = 50,
  duration = 1.25,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  tag = 'p',
  onLetterAnimationComplete,
  showCallback = false
}) => {
  const ref = useRef(null);
  const animationCompletedRef = useRef(false);
  const onCompleteRef = useRef(onLetterAnimationComplete);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    onCompleteRef.current = onLetterAnimationComplete;
  }, [onLetterAnimationComplete]);

  useEffect(() => {
    if (typeof document !== 'undefined' && 'fonts' in document) {
      document.fonts.ready.then(() => {
        setFontsLoaded(true);
      });
    } else {
      setFontsLoaded(true);
    }
  }, []);

  useGSAP(
    () => {
      if (!ref.current || !fontsLoaded) return;

      const split = new GSAPSplitText(ref.current, { type: splitType });
      const elements = split[splitType] || [];

      gsap.set(elements, from);

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !animationCompletedRef.current) {
              gsap.to(elements, {
                ...to,
                duration: duration,
                ease: ease,
                stagger: delay / 1000,
                onComplete: () => {
                  if (onCompleteRef.current && !animationCompletedRef.current) {
                    animationCompletedRef.current = true;
                    onCompleteRef.current();
                  }
                }
              });
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: threshold,
          rootMargin: rootMargin
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        split.revert();
        observer.disconnect();
      };
    },
    { dependencies: [fontsLoaded, text], scope: ref }
  );

  const Tag = tag;

  return (
    <Tag
      ref={ref}
      className={className}
      style={{ textAlign }}
    >
      {text}
    </Tag>
  );
};

export default SplitText;
