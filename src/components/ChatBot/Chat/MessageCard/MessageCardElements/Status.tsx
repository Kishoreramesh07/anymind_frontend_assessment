import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleExclamation,
  faClock,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

type StatusType = "sent" | "error" | "pending";

type StatusProps = {
  status: string | undefined;
};

const statusIconMap: Record<StatusType, { icon: any; color: string }> = {
  sent: {
    icon: faCircleCheck,
    color: "text-green-600",
  },
  error: {
    icon: faCircleExclamation,
    color: "text-red-600",
  },
  pending: {
    icon: faClock,
    color: "text-yellow-500",
  },
};

export default function Status({ status }: StatusProps) {
  const statusInfo = statusIconMap[status as StatusType] || {
    icon: faQuestionCircle,
    color: "text-gray-400",
  };

  return (
    <div className="flex items-center gap-1">
      <FontAwesomeIcon
        icon={statusInfo?.icon}
        className={`${statusInfo?.color} text-sm`}
      />
      <p className="text-xs text-gray-500">{status}</p>
    </div>
  );
}
