import Image from "next/image";

export function BrandMark({ preload = false }: { preload?: boolean }) {
  return (
    <Image
      aria-hidden="true"
      alt=""
      className="brand-logo"
      height={266}
      preload={preload}
      src="/brand/off-my-plate-logo.png"
      width={800}
    />
  );
}
