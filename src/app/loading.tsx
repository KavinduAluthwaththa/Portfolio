export default function Loading() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-0.5 overflow-hidden bg-white/[0.04]">
      <div
        className="h-full w-1/3 bg-brand-gradient shadow-glow"
        style={{ animation: "loading-progress 1.4s ease-in-out infinite" }}
      />
      <style>{`
        @keyframes loading-progress {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(120%); }
          100% { transform: translateX(220%); }
        }
      `}</style>
    </div>
  );
}
