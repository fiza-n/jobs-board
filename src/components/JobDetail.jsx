import useBookmark from "../hooks/useBookmark";

const JobDetail = ({ job }) => {
  if (!job) {
    return (
      <div className="bg-slate-800 rounded-lg p-6 text-white/50">
        Select a job to view details
      </div>
    );
  }

  const { addBookmark, removeBookmark, isBookmarked } = useBookmark();
  const isSaved = isBookmarked(job.id);
  const initials = job.company_name?.slice(0, 2).toUpperCase();

  const handleBookmark = (e) => {
    e.stopPropagation();
    if (isSaved) {
      removeBookmark(job.id);
    } else {
      addBookmark(job);
    }
  };

  return (
    <div className="bg-slate-800 rounded-lg p-6 text-white">
      {/* Header Section */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-indigo-900 text-indigo-300 flex items-center justify-center text-sm font-bold">
            {initials}
          </div>
          <div>
            <p className="text-xs text-white/40">{job.company_name}</p>
            <h2 className="text-2xl font-bold text-white">{job.title}</h2>
          </div>
        </div>
        <button
          onClick={handleBookmark}
          className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl transition-colors ${
            isSaved
              ? 'bg-indigo-500/20 border border-indigo-500/40'
              : 'bg-white/5 border border-white/10 hover:bg-white/10'
          }`}
        >
          {isSaved ? '🔖' : '🏷️'}
        </button>
      </div>

      {/* Info Section */}
      <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-white/10">
        <div>
          <p className="text-xs text-white/50 mb-1">📍 Location</p>
          <p className="text-sm text-white">{job.candidate_required_location || 'Remote'}</p>
        </div>
        <div>
          <p className="text-xs text-white/50 mb-1">⏱️ Job Type</p>
          <p className="text-sm text-white">{job.job_type}</p>
        </div>
        <div>
          <p className="text-xs text-white/50 mb-1">💰 Salary</p>
          <p className="text-sm text-white">{job.salary || 'Not specified'}</p>
        </div>
        <div>
          <p className="text-xs text-white/50 mb-1">📅 Posted</p>
          <p className="text-sm text-white">{job.publication_date?.slice(0, 10)}</p>
        </div>
      </div>

      {/* Description Section */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-white/80 mb-3">About this job</h3>
        <p className="text-sm text-white/70 leading-relaxed">{job.description}</p>
      </div>

      {/* Action Section */}
      <div className="flex gap-3">
        <button className="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobDetail;