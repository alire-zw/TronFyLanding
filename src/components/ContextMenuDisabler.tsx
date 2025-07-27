'use client';

export default function ContextMenuDisabler() {
  return (
    <div
      className="fixed inset-0 z-[99999] pointer-events-none"
      onContextMenu={(e) => e.preventDefault()}
    />
  );
} 