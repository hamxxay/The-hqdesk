"use client";

import { useState } from "react";
import { Search } from "lucide-react";
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

export function BookingFilters() {
  const [searchQuery, setSearchQuery] = useState("");
  const [workspaceType, setWorkspaceType] = useState("");
  const [dateRange, setDateRange] = useState("");

  return (
    <Card className="mb-8 border-primary shadow-md">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Search & Filter Workspaces
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Input
              placeholder="Enter location or workspace name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
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

          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger>
              <SelectValue placeholder="Select Date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="tomorrow">Tomorrow</SelectItem>
              <SelectItem value="this-week">This Week</SelectItem>
              <SelectItem value="next-week">Next Week</SelectItem>
              <SelectItem value="this-month">This Month</SelectItem>
            </SelectContent>
          </Select>

          <Button className="bg-primary hover:bg-secondary text-primary-foreground">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
