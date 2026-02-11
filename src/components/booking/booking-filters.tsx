"use client";

import { useState } from "react";
import { differenceInCalendarDays, format } from "date-fns";
import { DateRange } from "react-day-picker";
import { Search, CalendarIcon } from "lucide-react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Card, CardContent } from "../../components/ui/card";
import { Calendar } from "../../components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import { cn } from "../../lib/utils";

export function BookingFilters() {
  const [searchQuery, setSearchQuery] = useState("");
  const [workspaceType, setWorkspaceType] = useState("");
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
  const durationDays =
    dateRange?.from && dateRange?.to
      ? Math.max(1, differenceInCalendarDays(dateRange.to, dateRange.from) + 1)
      : null;
  const durationHours = durationDays ? durationDays * 24 : null;

  return (
    <Card className="mb-8 border-primary shadow-md">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Search & Filter Workspaces
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative self-start">
            <Input
              placeholder="Enter location or workspace name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
              <Search className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          <Select value={workspaceType} onValueChange={setWorkspaceType}>
            <SelectTrigger>
              <SelectValue placeholder="Workspace Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="private">Private Office</SelectItem>
              <SelectItem value="coworking">Co-Working Space</SelectItem>
              <SelectItem value="meeting">Meeting Room</SelectItem>
              <SelectItem value="event">Event Space</SelectItem>
            </SelectContent>
          </Select>

          <div className="space-y-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !dateRange && "text-muted-foreground",
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateRange?.from ? (
                    dateRange.to ? (
                      <>
                        {format(dateRange.from, "LLL dd, y")} -{" "}
                        {format(dateRange.to, "LLL dd, y")}
                      </>
                    ) : (
                      format(dateRange.from, "LLL dd, y")
                    )
                  ) : (
                    <span>Select date range</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={dateRange?.from}
                  selected={dateRange}
                  onSelect={setDateRange}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>

            <div className="flex items-center justify-between gap-2">
              {durationDays ? (
                <p className="text-xs text-muted-foreground">
                  Duration: {durationDays}{" "}
                  {durationDays === 1 ? "day" : "days"} ({durationHours}{" "}
                  {durationHours === 1 ? "hour" : "hours"})
                </p>
              ) : (
                <p className="text-xs text-muted-foreground">
                  Select start and end dates to calculate duration
                </p>
              )}

              {dateRange?.from && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setDateRange(undefined)}
                  className="h-auto px-2 py-1 text-xs"
                >
                  Clear
                </Button>
              )}
            </div>
          </div>

          <Button className="h-10 self-start bg-primary hover:bg-secondary text-primary-foreground">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
