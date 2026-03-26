import {
  Search,
  Home,
  Calendar,
  Inbox,
  Library,
  ChevronDown,
  Plus,
  Settings,
  Bot,
  FileText
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-72 bg-[#1f1f1f] min-h-screen flex flex-col justify-between p-3 text-sm">

      <div>
        <div className="flex items-center justify-between mb-4 px-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center text-xs">
              P
            </div>
            <span className="font-medium">Personalized Fin...</span>
          </div>
          <ChevronDown size={16} className="text-gray-400" />
        </div>

        <SidebarItem icon={<Search size={16} />} label="Search" />

        <div className="mt-2 space-y-1">
          <SidebarItem icon={<Home size={16} />} label="Home" active />
          <SidebarItem icon={<Calendar size={16} />} label="Meetings" />
          <SidebarItem icon={<Bot size={16} />} label="Notion AI" />
          <SidebarItem icon={<Inbox size={16} />} label="Inbox" />
          <SidebarItem icon={<Library size={16} />} label="Library" />
        </div>

        <SectionTitle title="Recents" />
        <SidebarItem icon={<FileText size={16} />} label="Git and GitHub" />
        <SidebarItem icon={<FileText size={16} />} label="1:1 notes" />

        <SectionTitle title="Agents" extra="Beta" />
        <SidebarItem icon={<Plus size={16} />} label="New agent" />

        <SectionTitle title="Private" />
        <SidebarItem icon={<FileText size={16} />} label="Git and GitHub" />
        <SidebarItem icon={<FileText size={16} />} label="Try AI Meeting Notes" />
        <SidebarItem icon={<FileText size={16} />} label="1:1 notes" />

        <div className="mt-3">
          <SidebarItem icon={<Plus size={16} />} label="New page" />
        </div>
      </div>

      <div>
        <div className="bg-[#2a2a2a] p-3 rounded-lg text-xs text-gray-300 mb-3">
          <p>You've used all of this workspace's free blocks</p>
          <button className="text-white mt-2">
            Upgrade plan →
          </button>
        </div>

        <SidebarItem icon={<Settings size={16} />} label="Settings" />
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, active }) {
  return (
    <div
      className={`flex items-center gap-2 px-2 py-1.5 rounded cursor-pointer transition ${
        active
          ? "bg-[#2a2a2a] text-white"
          : "text-gray-300 hover:bg-[#2a2a2a]"
      }`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}

function SectionTitle({ title, extra }) {
  return (
    <div className="flex items-center gap-2 mt-5 px-2 text-xs text-gray-500">
      <span>{title}</span>
      {extra && (
        <span className="text-[10px] bg-gray-700 px-1 rounded">
          {extra}
        </span>
      )}
    </div>
  );
}
