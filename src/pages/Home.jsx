import { useState } from 'react'
import SearchBar from '../components/SearchBar'
import JobCard from '../components/JobCard'
import JobDetail from '../components/JobDetail'

const Home = () => {
  const [searchValue, setSearchValue] = useState('')
  const [selectedJobId, setSelectedJobId] = useState(null)

  // Mock jobs data for testing
  const mockJobs = [
    {
      id: 1,
      title: 'React Developer',
      company_name: 'Google',
      candidate_required_location: 'California',
      job_type: 'Full-time',
      salary: '$120k',
      publication_date: '2024-05-06',
      description: 'Build amazing products...'
    },
    {
      id: 2,
      title: 'Frontend Engineer',
      company_name: 'Microsoft',
      candidate_required_location: 'Remote',
      job_type: 'Full-time',
      salary: '$110k',
      publication_date: '2024-05-05',
      description: 'Join our team...'
    },
    {
      id: 3,
      title: 'Junior Developer',
      company_name: 'Meta',
      candidate_required_location: 'New York',
      job_type: 'Internship',
      salary: '$15/hr',
      publication_date: '2024-05-04',
      description: 'Learn and grow...'
    }
  ]

  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      
      <div className="grid grid-cols-2 gap-6 mt-6">
        {/* Job List */}
        <div className="space-y-3">
          {mockJobs.map(job => (
            <JobCard
              key={job.id}
              job={job}
              isSelected={selectedJobId === job.id}
              onClick={() => setSelectedJobId(job.id)}
            />
          ))}
        </div>

       {/* Job Detail */}
<div>
  {selectedJobId ? (
    <JobDetail job={mockJobs.find(j => j.id === selectedJobId)} />
  ) : (
    <div className="bg-slate-800 rounded-lg p-6 text-white/50">
      Select a job to view details
    </div>
  )}
</div>
      </div>
    </div>
  )
}

export default Home