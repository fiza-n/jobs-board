import useBookmark from "../hooks/useBookmark";

const JobCard = ({ job, isSelected, onClick }) => {
  const { addBookmark, removeBookmark, isBookmarked } = useBookmark();

  const isSaved = isBookmarked(job.id);

  const handleBookmark = (e) => {
    e.stopPropagation();
    if (isSaved) {
      removeBookmark(job.id);
    } else {
      addBookmark(job);
    }
  };

  const initials = job.company_name?.slice(0, 2).toUpperCase();

  return (
    <div
      onClick={onClick}
      className={`bg-slate-800 rounded-lg p-4 cursor-pointer border-2 transition-colors ${
        isSelected ? 'border-indigo-500' : 'border-white/5 hover:border-indigo-500/40'
      }`}
    >
     
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-indigo-900 text-indigo-300 flex items-center justify-center text-xs font-medium">
            {initials}
          </div>
          <div>
            <p className="text-xs text-white/40">{job.company_name}</p>
            <p className="text-sm font-medium text-white">{job.title}</p>
          </div>
        </div>
        <button
          onClick={handleBookmark}
          className={`w-7 h-7 rounded-md flex items-center justify-center border transition-colors ${
            isSaved
              ? 'bg-indigo-500/15 border-indigo-500/40'
              : 'bg-white/5 border-white/10 hover:bg-white/10'
          }`}
        >
          {isSaved ? '🔖' : '🏷️'}
        </button>
      </div>

      {/* Tags */}
      <div className="flex gap-2 flex-wrap mb-3">
        <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400">
          {job.candidate_required_location || 'Remote'}
        </span>
        <span className="text-xs px-2 py-1 rounded-full bg-indigo-500/10 text-indigo-300">
          {job.job_type}
        </span>
      </div>

      {/* Footer: Date + View details */}
      <div className="flex items-center justify-between pt-3 border-t border-white/5">
        <span className="text-xs text-white/25">
          {job.publication_date?.slice(0, 10)}
        </span>
        <button onClick={onClick} className="text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
          View details
        </button>
      </div>
    </div>
  );
};

export default JobCard;