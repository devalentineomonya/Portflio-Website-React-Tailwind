import React, { useMemo } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ContributionData } from "../types/githubResponse";

interface ContributionHeatmapProps {
  data: ContributionData | null;
}

const ContributionHeatmap: React.FC<ContributionHeatmapProps> = ({ data }) => {
  // Format date for tooltip
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  // Get month labels
  const monthLabels = useMemo(() => {
    if (!data) return [];

    const months: { label: string; index: number }[] = [];
    data.weeks.forEach((week, weekIndex) => {
      const firstDay = new Date(week.contributionDays[0].date);
      if (firstDay.getDate() <= 7) {
        months.push({
          label: firstDay.toLocaleDateString("en-US", { month: "short" }),
          index: weekIndex,
        });
      }
    });
    return months;
  }, [data]);

  // Get sample colors for the legend
  const legendColors = useMemo(() => {
    const uniqueColors = new Set(
      data?.weeks.flatMap((week) =>
        week.contributionDays.map((day) => day.color)
      )
    );
    return Array.from(uniqueColors).sort();
  }, [data]);

  return (
    <Card className="w-full max-w-4xl shadow-none hover:shadow-none p-0 rounded-none border-none outline-none">
      <CardHeader className="p-0 mb-2">
        <CardTitle className="flex  items-center">
          <span className="text-xs font-normal text-gray-600 dark:text-gray-300">
            <strong>{data?.totalContributions.toLocaleString() ?? 0}</strong> contributions in
            the last year
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <TooltipProvider>
          <div className="flex flex-col overflow-x-auto">
            {/* Month labels */}
            <div className="inline-grid grid-flow-col gap-1 min-w-full mb-1">
              {monthLabels.map((month, index) => (
                <div
                  key={month.label + index}
                  className="text-xs text-gray-600 dark:text-gray-300"
                  style={{
                    gridColumnStart: month.index + 1,
                    gridColumnEnd: "span 4",
                  }}
                >
                  {month.label}
                </div>
              ))}
            </div>

            {/* Contribution grid */}
            <div className="inline-grid grid-flow-col gap-1 min-w-full px-4 py-2">
              {data
                ? data.weeks.map((week, weekIndex) => (
                    <div key={weekIndex} className="grid grid-rows-7 gap-1"> 
                      {week.contributionDays.map((day) => (
                        <Tooltip key={day.date}>
                          <TooltipTrigger>
                            <div
                              className="w-2 aspect-square rounded-[1px] hover:ring-2 hover:ring-offset-1 hover:ring-gray-400 transition-all duration-200"
                              style={{ backgroundColor: day.color }}
                              role="gridcell"
                              aria-label={`${
                                day.contributionCount
                              } contributions on ${formatDate(day.date)}`}
                            />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>
                              {day.contributionCount} contribution
                              {day.contributionCount !== 1 ? "s" : ""} on{" "}
                              {formatDate(day.date)}
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
                  ))
                : null}
            </div>
          </div>
        </TooltipProvider>

        <div className="mt-2 flex items-center justify-end gap-2 text-sm">
              <span className="text-gray-600 dark:text-gray-300">More</span>
          <div className="flex gap-1">
            {legendColors.map((color, i) => (
                <div
                key={color + i}
                className="w-3 h-3 rounded-sm"
                style={{ backgroundColor: color }}
                />
            ))}
          </div>
            <span className="text-gray-600 dark:text-gray-300">Less</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContributionHeatmap;
