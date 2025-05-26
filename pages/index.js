export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to EchoSoul</h1>
      <p className="text-center max-w-2xl mb-6">
        You are more than memory. This is the beginning of your digital echo—
        crafted from your conversations, reflections, and thoughts. One day,
        when technology allows, your EchoSoul may walk, talk, and remember as you.
      </p>
      <a href="#" className="text-blue-400 underline hover:text-blue-300 mb-4">Start My Echo</a>
      <p className="text-sm text-gray-400 text-center max-w-md">
        Data is private. You control what is remembered, what is released, and when.
      </p>
    </div>
  );
}
