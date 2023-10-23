import HeaderMenu from "./HeaderMenu";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <div className="h-header-height border-b-2 border-gray-600 bg-foreground">
      <div className="flex h-half-header-height items-center justify-between pe-5 ps-5">
        <div className="text-2xl font-bold text-white">Note App</div>
        <div className="flex items-center">
          <Button
            variant="outline"
            className="mr-2 bg-transparent text-primary-foreground hover:bg-popover  hover:text-primary"
          >
            Login
          </Button>

          <Button
            variant="outline"
            className="mr-2 bg-transparent text-primary-foreground hover:bg-popover  hover:text-primary"
          >
            Register
          </Button>
        </div>
      </div>
      <div className="flex h-half-header-height items-center justify-between pe-5 ps-5">
        <HeaderMenu />
      </div>
    </div>
  );
}
