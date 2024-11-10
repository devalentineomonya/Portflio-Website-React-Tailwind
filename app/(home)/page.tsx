import Presentation from "@/features/home/widgets/presentation/Presentation";
import Profile from "@/features/home/widgets/profile/Profile";

export default function Home() {
  return (
    <main className="px-4  bg-slate-900/60">
      <Profile />
      <Presentation />
    </main>
  );
}
