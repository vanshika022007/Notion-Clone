import {
  Clock,
  Calendar,
  Video,
  TrendingUp,
  Lightbulb,
  FileText
} from "lucide-react";

const recentData = [
  { title: "Git and GitHub", date: "Oct 10, 2025" },
  { title: "Goals Tracker", date: "Aug 22, 2025" },
  { title: "1:1 notes", date: "Aug 26, 2025" }
];

const learnData = [
  {
    title: "Customize & style your content",
    time: "9m read",
    img: "https://www.notion.so/images/home/learn/customize-and-style-your-content.png"
  },
  {
    title: "Types of content blocks",
    time: "10m watch",
    img: "https://www.notion.so/images/home/learn/types-of-content-blocks.png"
  },
  {
    title: "Understanding Notion's sharing settings",
    time: "6m read",
    img: "https://www.notion.so/images/home/learn/understanding-notions-sharing-settings.png"
  },
  {
    title: "Using Notion AI to extend your impact",
    time: "5m read",
    img: "https://www.notion.so/images/home/learn/using-notion-ai.png"
  },
  {
    title: "Keyboard shortcuts",
    time: "4m read",
    img: "https://www.notion.so/images/home/learn/keyboard-shortcuts.png"
  }
];

const templateData = [
  {
    title: "Projects & Tasks",
    img: "https://s3.us-west-2.amazonaws.com/public.notion-static.com/template/6733d43d-dcc0-4764-84b6-e7ba12d0e965/1723374480864/desktop.jpg"
  },
  {
    title: "Meetings",
    img: "https://s3.us-west-2.amazonaws.com/public.notion-static.com/template/e05ed5a3-2022-4f07-8bd8-8d9c17df9dfe/desktop.png"
  },
  {
    title: "Wiki",
    img: "https://s3.us-west-2.amazonaws.com/public.notion-static.com/template/8a3e5c41-d3ee-4937-a220-f9f218459339/desktop.png"
  },
  {
    title: "Presentation",
    img: "https://s3.us-west-2.amazonaws.com/public.notion-static.com/template/d63f2138-4356-4dc1-96b2-a519741bc256/desktop.png"
  },
  {
    title: "To-do list",
    img: "https://s3.us-west-2.amazonaws.com/public.notion-static.com/template/ca61fb57-1062-4074-903c-47194bad256c/desktop.png"
  }
];

export default function Section() {
  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden py-8">

        <div className="w-full mt-8 bg-[#2a1a1a] text-red-400 px-2 py-2 rounded mb-6 text-m text-center">
          <span className="mr-7">You've used all of this workspace's free blocks</span>
          <span><button className="border-red-400 border-2 border-rounded cursor-pointer p-1 rounded-lg">Upgrade plan</button></span>
        </div>

      <div className="max-w-5xl mx-auto px-6">
        <h1 className="mt-13 text-4xl font-semibold text-gray-100 mb-6 text-center">
          Good evening
        </h1>

        <Header icon={<Clock size={16} />} title="Recently visited" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {recentData.map((item, i) => (
            <RecentCard key={i} {...item} />
          ))}
        </div>

        <Header icon={<Lightbulb size={16} />} title="Learn" />
        <div className="flex gap-5 overflow-x-auto no-scrollbar pb-2 mb-10">
          {learnData.map((item, i) => (
            <LearnCard key={i} {...item} />
          ))}
        </div>

        <Header icon={<Calendar size={16} />} title="Upcoming events" />

        <div className="bg-[#2a2a2a] rounded-xl p-6 mb-10 flex gap-8 min-h-65 items-center">
          
          <div className="flex gap-4 items-center">
            <div className="w-10 h-10 bg-[#3a3a3a] rounded flex items-center justify-center">
              <Calendar size={18} />
            </div>

            <div>
              <h3 className="text-lg text-gray-200 mb-1">
                Connect AI Meeting Notes with your Calendar events
              </h3>
              <p className="text-gray-400 text-sm mb-3">
                Join calls, transcribe audio, and summarize meetings all in Notion.
              </p>
              <button className="text-blue-400 hover:underline">
                Connect Notion Calendar
              </button>
            </div>
          </div>

          <div className="border-l border-gray-700 pl-6 space-y-4 text-sm">
            <div>
              <p className="text-gray-400">Today</p>
              <div className="flex items-center gap-2">
                <Video size={14} />
                <span className="text-gray-200">Team standup</span>
              </div>
              <p className="text-xs text-gray-500">9 AM · Office</p>
            </div>

            <div>
              <p className="text-gray-400">Fri</p>
              <div className="flex items-center gap-2">
                <Calendar size={14} />
                <span className="text-gray-200">Project check-in</span>
              </div>
              <p className="text-xs text-gray-500">10 AM · Office</p>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-2 gap-6 mb-10">

          <div>
            <Header icon={<Lightbulb size={16} />} title="Suggested for you" />
            <EmptyCard
              icon={<FileText size={26} />}
              text="Pages relevant to you will show up here."
            />
          </div>

          <div>
            <Header icon={<TrendingUp size={16} />} title="Trending" />
            <EmptyCard
              icon={<TrendingUp size={26} />}
              text="Popular pages will show up here."
            />
          </div>

        </div>

        <Header icon={<Lightbulb size={16} />} title="Featured templates" />
        <div className="flex gap-5 overflow-x-auto no-scrollbar pb-2">
          {templateData.map((item, i) => (
            <TemplateCard key={i} {...item} />
          ))}
        </div>

      </div>
    </div>
  );
}

function Header({ icon, title }) {
  return (
    <div className="flex items-center gap-2 text-gray-400 mb-4">
      {icon}
      <span>{title}</span>
    </div>
  );
}

function RecentCard({ title, date }) {
  return (
    <div className="bg-[#2a2a2a] p-4 rounded-xl hover:bg-[#333] transition cursor-pointer">
      
      <div className="h-24 bg-[#3a3a3a] rounded-lg mb-3"></div>

      <div className="flex items-center gap-2 mb-1">
        <FileText size={14} className="text-gray-300" />
        <p className="text-sm text-gray-200 truncate">
          {title}
        </p>
      </div>

      <p className="text-xs text-gray-500 ml-5">
        {date}
      </p>

    </div>
  );
}


function LearnCard({ title, time, img }) {
  return (
    <div className="min-w-65 shrink-0 bg-[#2a2a2a] rounded-xl overflow-hidden">
      <img src={img} className="h-28 w-full object-cover" />
      <div className="p-3">
        <p className="text-sm text-gray-200">{title}</p>
        <p className="text-xs text-gray-500">{time}</p>
      </div>
    </div>
  );
}

function TemplateCard({ title, img }) {
  return (
    <div className="min-w-65 shrink-0 bg-[#2a2a2a] rounded-xl overflow-hidden">
      <img src={img} className="h-32 w-full object-cover" />
      <div className="p-3">
        <p className="text-sm text-gray-200">{title}</p>
        <p className="text-xs text-gray-500">By Notion</p>
      </div>
    </div>
  );
}

function EmptyCard({ icon, text }) {
  return (
    <div className="bg-[#2a2a2a] h-56 rounded-xl flex flex-col items-center justify-center text-gray-500 text-sm px-6 text-center">
      <div className="mb-3">{icon}</div>
      {text}
    </div>
  );
}