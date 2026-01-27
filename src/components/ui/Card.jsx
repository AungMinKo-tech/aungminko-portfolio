import { motion } from "motion/react";
import MyProfile from "../../assets/my-profile-image.jpg";

export default function LanyardCard() {
  return (
    <div className="flex flex-col items-center mt-20">
      {/* Lanyard Rope */}
      <div className="w-1 h-24 bg-slate-400 rounded-full"></div>

      {/* Card */}
      <motion.div
        animate={{ rotate: [-3, 3, -3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="w-64 h-96 bg-linear-to-br from-slate-800 to-slate-900
        rounded-xl shadow-2xl p-4 text-white origin-top"
      >
        {/* Hole */}
        <div className="w-4 h-4 bg-slate-300 rounded-full mx-auto mb-2"></div>

        <div className="flex justify-center">
          <img
            src={MyProfile}
            alt="Profile"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </motion.div>
    </div>
  );
}
