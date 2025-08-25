import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/#" className="text-xl font-bold">
      <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
        alaa<span className="text-white"> shaher</span>
      </span>
    </Link>
  );
};

export default Logo;
