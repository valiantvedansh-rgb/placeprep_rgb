export default function Features() {
    return (
      <section className="py-16 px-6 grid gap-6 md:grid-cols-3 text-center">
        <div className="p-6 bg-gray-900 rounded-xl">
          <h3 className="font-semibold mb-2">Mock Interviews</h3>
          <p className="text-gray-400 text-sm">
            Practice real interview questions with feedback.
          </p>
        </div>
  
        <div className="p-6 bg-gray-900 rounded-xl">
          <h3 className="font-semibold mb-2">DSA Tracker</h3>
          <p className="text-gray-400 text-sm">
            Track problems, progress, and revision cycles.
          </p>
        </div>
  
        <div className="p-6 bg-gray-900 rounded-xl">
          <h3 className="font-semibold mb-2">Placement Roadmap</h3>
          <p className="text-gray-400 text-sm">
            Know exactly what to prepare and when.
          </p>
        </div>
      </section>
    );
  }
  