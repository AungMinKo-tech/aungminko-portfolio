import { Badge } from "@/components/ui/Badge";
import { formatDateRange } from "@/lib/utils";
import type { Experience } from "@/types";

interface TimelineItemProps {
  experience: Experience;
  isLast?: boolean;
}

export function TimelineItem({ experience, isLast = false }: TimelineItemProps) {
  return (
    <div className="relative flex gap-6 pb-12 last:pb-0">
      <div className="relative flex flex-col items-center">
        <div className="relative z-10 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-background">
          <span className="h-2 w-2 rounded-full bg-accent" />
        </div>
        {!isLast && (
          <div className="absolute top-4 h-full w-px bg-border" aria-hidden />
        )}
      </div>

      <div className="flex-1 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
        <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="text-lg font-semibold text-foreground">{experience.role}</h3>
            <p className="text-accent">{experience.company}</p>
          </div>
          <time className="text-sm text-muted">
            {formatDateRange(experience.startDate, experience.endDate)}
          </time>
        </div>
        <p className="mb-4 text-sm text-muted">{experience.location}</p>
        <ul className="mb-4 space-y-2">
          {experience.description.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
