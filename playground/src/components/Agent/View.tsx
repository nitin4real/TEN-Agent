"use client"

import { useMultibandTrackVolume } from "@/common"
import { cn } from "@/lib/utils"
// import AudioVisualizer from "../audioVisualizer"
import { IMicrophoneAudioTrack } from "agora-rtc-sdk-ng"
import AudioVisualizer from "@/components/Agent/AudioVisualizer"

export interface AgentViewProps {
  audioTrack?: IMicrophoneAudioTrack
}

export default function AgentView(props: AgentViewProps) {
  const { audioTrack } = props

  const subscribedVolumes = useMultibandTrackVolume(audioTrack, 8)

  return (
    <div className="mt-3 flex h-12 flex-col items-center justify-center gap-2.5 self-stretch rounded-md border border-[#A0D4FF] bg-[#A0D4FF] p-2 shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)]">
      <AudioVisualizer
        type="agent"
        frequencies={subscribedVolumes}
        barWidth={20}
        minBarHeight={2}
        maxBarHeight={40}
        borderRadius={10}
        gap={4}
      />
    </div>
  )
}
