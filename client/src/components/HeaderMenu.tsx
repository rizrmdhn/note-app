import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "./ui/menubar";

export default function HeaderMenu() {
  return (
    <Menubar className="border-none bg-transparent text-primary-foreground">
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer hover:border-b-2 hover:border-primary-foreground">
          File
        </MenubarTrigger>
        <MenubarContent className="bg-primary-foreground">
          <MenubarItem className="cursor-pointer hover:bg-gray-300 hover:text-white">
            New
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer hover:border-b-2 hover:border-primary-foreground">
          Friends
        </MenubarTrigger>
        <MenubarContent className="bg-primary-foreground">
          <MenubarItem className="cursor-pointer hover:bg-gray-300 hover:text-white">
            See Friends
          </MenubarItem>
          <MenubarItem className="cursor-pointer hover:bg-gray-300 hover:text-white">
            Search Friends
          </MenubarItem>
          <MenubarItem className="cursor-pointer hover:bg-gray-300 hover:text-white">
            Remove Friend
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
