import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function FindUs() {
  return (
    <div className="mt-9">
      <h4 className="text-xl font-bold mb-4">Find Us On</h4>

      <div className="flex flex-col gap-2 border rounded">
        {/* Facebook Button */}
        <button className="flex items-center justify-start gap-2 font-medium p-4 border-b">
          <div className="bg-zinc-100 rounded-full p-2">
            <FaFacebookF className="text-blue-600" />
          </div>
          <span className="text-neutral-500 font-medium">Facebook</span>
        </button>

        {/* Twitter Button */}
        <button className="flex items-center justify-start gap-2 font-medium p-4 border-b">
          <div className="bg-zinc-100 rounded-full p-2">
            <FaTwitter className="text-sky-500" />
          </div>
          <span className="text-neutral-500 font-medium">Twitter</span>
        </button>

        {/* Instagram Button */}
        <button className="flex items-center justify-start gap-2 font-medium p-4 border-b">
          <div className="bg-zinc-100 rounded-full p-2">
            <FaInstagram className="text-pink-500" />
          </div>
          <span className="text-neutral-500 font-medium">Instagram</span>
        </button>
      </div>
    </div>
  );
}
