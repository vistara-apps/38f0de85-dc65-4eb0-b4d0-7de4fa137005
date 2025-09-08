export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-purple-800 flex items-center justify-center">
      <div className="glass-card p-8 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
        <h2 className="text-white text-xl font-semibold mb-2">Loading FlexiNest</h2>
        <p className="text-white text-opacity-70">Connecting you with trusted support...</p>
      </div>
    </div>
  );
}
