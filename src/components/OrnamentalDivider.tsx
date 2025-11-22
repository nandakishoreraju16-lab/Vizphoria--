const OrnamentalDivider = () => {
  return (
    <div className="flex items-center justify-center py-8 px-4">
      <div className="flex items-center gap-4 w-full max-w-2xl">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-secondary to-secondary/50" />
        <div className="flex items-center gap-2">
          <span className="text-secondary text-2xl">✦</span>
          <span className="text-primary text-3xl">❖</span>
          <span className="text-secondary text-2xl">✦</span>
        </div>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-secondary to-secondary/50" />
      </div>
    </div>
  );
};

export default OrnamentalDivider;
