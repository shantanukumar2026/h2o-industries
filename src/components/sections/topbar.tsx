import { Container } from "@/components/layout/container";
import { navigation } from "@/config/navigation";

export function TopBar() {
  return (
    <div className="bg-[#1B79EE] text-white py-2 text-[10px] md:text-[11px] font-bold tracking-wider hidden lg:block border-b border-[#1B79EE]/20 select-none">
      <Container className="flex items-center justify-between">
        {/* Left Side Links */}
        <div className="flex items-center gap-4 xl:gap-6">
          {navigation.topbarLeft.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="hover:opacity-85 transition-opacity whitespace-nowrap uppercase"
            >
              {item.title}
            </a>
          ))}
        </div>

        {/* Divider / Separator & Right Side Links */}
        <div className="flex items-center gap-4 xl:gap-6">
          <div className="h-3.5 w-px bg-white/30 mr-2" />
          {navigation.topbarRight.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="hover:opacity-85 transition-opacity whitespace-nowrap uppercase"
            >
              {item.title}
            </a>
          ))}
        </div>
      </Container>
    </div>
  );
}
