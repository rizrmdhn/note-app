export default function Header() {
  return (
    <div className="h-header-height bg-foreground border-b-2 border-gray-600">
      <div className="flex justify-between items-center h-full p-5">
        <div className="text-2xl font-bold text-white">Note App</div>
        <div className="flex items-center">
          <div className="text-white mr-4">Login</div>
          <div className="text-white">Register</div>
        </div>
      </div>
    </div>
  );
}
