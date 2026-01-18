"use client";

import { Calendar, Clock, Users, MapPin, BadgeCheck } from "lucide-react";

export default function EventsCard({ event }) {
  return (
    <div className="w-full overflow-hidden rounded-2xl bg-slate-950 text-white shadow-lg border border-slate-800">
      {/* Image Section */}
      <div className="relative h-48 w-full">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop"
          alt={event.title}
          className="h-full w-full object-cover"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {event.featured && (
            <span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-black">
              Featured
            </span>
          )}
          {event.certified && (
            <span className="flex items-center gap-1 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-black">
              <BadgeCheck className="h-3 w-3" /> Certified
            </span>
          )}
        </div>

        <span className="absolute top-3 right-3 rounded-full bg-slate-800 px-3 py-1 text-xs">
          {event.type}
        </span>

        {/* Date Overlay */}
        <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-lg bg-black/60 px-3 py-1 text-sm">
          <Calendar className="h-4 w-4" />
          {new Date(event.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
          {event.duration ? ` - ${event.duration}` : ""}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="text-xl font-bold">{event.title}</h3>
        <p className="text-sm text-slate-300">
          {event.live ? "Live event" : "Upcoming / Pre-recorded event"}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            {event.location}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {event.time}
          </div>
        </div>

        {/* Seats */}
        <div className="flex items-center gap-2 text-sm">
          <Users className="h-4 w-4" />
          <span>
            {event.attendees} / {event.spots}
          </span>
          {event.spots - event.attendees <= 12 && (
            <span className="rounded-full bg-red-500 px-2 py-0.5 text-xs font-semibold">
              Only {event.spots - event.attendees} spots left!
            </span>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {event.tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-800 px-3 py-1 text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Certificate */}
        {event.certificate && (
          <div className="mt-3 rounded-xl bg-emerald-100 text-emerald-900 px-4 py-2 text-sm font-medium">
            {event.certificate}
          </div>
        )}

        {/* Price & CTA */}
        <div className="mt-4 flex items-center justify-between border-t border-slate-800 pt-4">
          <div>
            <p className="text-2xl font-bold">${event.price}.00</p>
            {event.earlyBird && (
              <p className="text-sm text-emerald-400">
                Early bird: ${event.earlyBird}.00
              </p>
            )}
          </div>
          <button className="rounded-xl bg-violet-600 px-5 py-2 font-semibold hover:bg-violet-700 transition">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
