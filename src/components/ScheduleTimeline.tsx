"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Clock,
  Eye,
  EyeOff,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SCHEDULE, type ScheduleDay, type ScheduleEvent } from "@/lib/schedule";

export default function ScheduleTimeline() {
  // Global show details toggle — default is false (brief view) as requested
  const [showAllDetails, setShowAllDetails] = useState(false);
  // Track individual expanded items when not in showAllDetails mode: key `${dayIdx}-${eventIdx}`
  const [expandedKeys, setExpandedKeys] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setExpandedKeys((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleGlobalToggle = () => {
    const next = !showAllDetails;
    setShowAllDetails(next);
    // Reset individual overrides when switching global mode
    setExpandedKeys({});
  };

  return (
    <div className="w-full">
      {/* Section Header with Controls */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
        <div>
          <div className="mb-1.5">
            <span className="font-heading text-xs font-semibold uppercase tracking-wider text-vivid">
              Interactive Itinerary
            </span>
          </div>
          <h2 className="font-heading text-3xl font-bold tracking-tight">
            Event Itinerary
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground">
            All times listed in Central Time (CT). Click any event or use the toggle to view full activity descriptions.
          </p>
        </div>

        <div className="flex items-center shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={handleGlobalToggle}
            className="rounded-full text-xs font-semibold shadow-2xs border-border/80 hover:bg-muted"
            aria-label={showAllDetails ? "Collapse all event details" : "Expand all event details"}
          >
            {showAllDetails ? (
              <>
                <EyeOff className="size-3.5 mr-1.5 text-muted-foreground" />
                Hide details
              </>
            ) : (
              <>
                <Eye className="size-3.5 mr-1.5 text-vivid" />
                Show details
              </>
            )}
          </Button>
        </div>
      </div>

      {/* 2-Day Side-by-Side or Stacked Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {SCHEDULE.map((dayPlan: ScheduleDay, dayIdx: number) => (
          <div
            key={dayPlan.day}
            data-reveal
            data-reveal-delay={String(dayIdx + 1) as "1" | "2"}
            className="flex flex-col rounded-2xl border border-border bg-card p-5 sm:p-7 shadow-xs"
          >
            {/* Day Header */}
            <div className="flex items-center justify-between border-b border-border/60 pb-4">
              <div>
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-vivid">
                  Day 0{dayIdx + 1}
                </span>
                <h3 className="mt-0.5 font-heading text-2xl font-bold text-foreground">
                  {dayPlan.day}
                </h3>
              </div>
              <span className="font-heading text-xs font-medium text-muted-foreground">
                {dayPlan.date}
              </span>
            </div>

            {/* Event List */}
            <div className="mt-4 flow-root">
              <ul className="divide-y divide-border/40">
                {dayPlan.events.map((event: ScheduleEvent, idx: number) => {
                  const itemKey = `${dayIdx}-${idx}`;
                  const isExpanded = showAllDetails || !!expandedKeys[itemKey];
                  const hasDetails = Boolean(event.details);

                  return (
                    <li
                      key={idx}
                      onClick={() => hasDetails && !showAllDetails && toggleItem(itemKey)}
                      className={`group transition-colors ${
                        hasDetails && !showAllDetails ? "cursor-pointer hover:bg-muted/30" : ""
                      } ${
                        event.highlight
                          ? "rounded-xl border border-vivid/25 bg-vivid/[0.04] p-3.5 sm:p-4 my-2"
                          : showAllDetails
                          ? "py-3.5 first:pt-1 last:pb-1"
                          : "py-2.5 first:pt-1 last:pb-1"
                      }`}
                    >
                      {/* Top Meta: Time + Location */}
                      <div className="flex flex-wrap items-center justify-between gap-x-2.5 gap-y-1">
                        <span className="inline-flex items-center gap-1.5 font-heading text-xs font-semibold text-foreground">
                          <Clock className="size-3.5 text-vivid shrink-0" />
                          {event.time}
                        </span>

                        <div className="flex items-center gap-2">
                          {event.location && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground">
                              <MapPin className="size-3 text-muted-foreground/70 shrink-0" />
                              {event.location}
                            </span>
                          )}
                          {hasDetails && !showAllDetails && (
                            <span
                              className="text-muted-foreground/50 group-hover:text-vivid transition-colors"
                              aria-hidden="true"
                            >
                              {isExpanded ? (
                                <ChevronUp className="size-3.5" />
                              ) : (
                                <ChevronDown className="size-3.5" />
                              )}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Event Header / Activity Title */}
                      <h4
                        className={`mt-1.5 font-heading text-[15px] font-semibold leading-snug ${
                          event.highlight ? "text-vivid" : "text-foreground group-hover:text-vivid transition-colors"
                        }`}
                      >
                        {event.activity}
                      </h4>

                      {/* Sponsor Talk Sub-Schedule if present */}
                      {event.subSchedule && (
                        <div className="mt-2.5 overflow-hidden rounded-xl border border-border/70 bg-muted/40 shadow-2xs">
                          <div className="bg-muted/70 px-3 py-1.5 border-b border-border/50 flex items-center justify-between text-[10.5px]">
                            <span className="font-heading font-bold uppercase tracking-wider text-foreground">
                              Speaker Schedule
                            </span>
                            <span className="text-muted-foreground/80 font-normal">
                              5 min buffer &amp; Q&amp;A
                            </span>
                          </div>
                          <div className="divide-y divide-border/30">
                            {event.subSchedule.map((item) => (
                              <div
                                key={item.sponsor}
                                className="px-3 py-1.5 flex items-center justify-between gap-2.5 text-xs"
                              >
                                <span className="font-semibold text-foreground flex items-center gap-2">
                                  <span className="size-1.5 rounded-full bg-vivid shrink-0" />
                                  {item.sponsor}
                                </span>
                                <span className="font-mono text-[11px] font-medium text-muted-foreground shrink-0">
                                  {item.time}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Expandable Details */}
                      {hasDetails && (
                        <div
                          className={`grid transition-all duration-200 ease-in-out ${
                            isExpanded
                              ? "grid-rows-[1fr] opacity-100 mt-1.5"
                              : "grid-rows-[0fr] opacity-0 overflow-hidden"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <p className="text-xs leading-relaxed text-muted-foreground">
                              {event.details}
                            </p>
                          </div>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
