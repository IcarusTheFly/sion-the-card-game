import { Button } from "@nextui-org/button";
import Link from "next/link";
import ChevronDoubleLeftIcon from "../../ChevronDoubleLeftIcon";

export default function BackButton({ url }: { url: string }) {
  return (
    <Link href={url} prefetch={false} className="inline-flex">
      <Button
        size="sm"
        className="bg-[#ffd700] text-gray-950 hover:bg-[#ffcc00] focus:ring-[#ffd700]"
      >
        <ChevronDoubleLeftIcon className="h-5 w-5" />
        Lista de cartas
      </Button>
    </Link>
  );
}
