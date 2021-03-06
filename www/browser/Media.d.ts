import { AudioPlayerOptions, AudioTrack, AudioTrackRemoval, SuccessCallback, ErrorCallback, PlaylistItemOptions } from '../interfaces';
import { RmxAudioPlayer } from '../RmxAudioPlayer';
/**
 * AudioPlayer class implementation. A singleton of this class is exported for use by Cordova,
 * but nothing stops you from creating another instance. Keep in mind that the native players
 * are in fact singletons, so the only thing the separate instance gives you would be
 * separate onStatus callback streams.
 */
export declare class RmxAudioPlayerBrowser extends RmxAudioPlayer {
    /**
     * Sets the player options. This can be called at any time and is not required before playback can be initiated.
     */
    setOptions: (successCallback: SuccessCallback, errorCallback: ErrorCallback, options: AudioPlayerOptions) => void;
    /**
     * Playlist item management
     */
    /**
     * Sets the entire list of tracks to be played by the playlist.
     * This will clear all previous items from the playlist.
     * If you pass options.retainPosition = true, the current playback position will be
     * recorded and used when playback restarts. This can be used, for example, to set the
     * playlist to a new set of tracks, but retain the currently-playing item to avoid skipping.
     */
    setPlaylistItems: (successCallback: SuccessCallback, errorCallback: ErrorCallback, items: AudioTrack[], options?: PlaylistItemOptions | undefined) => void;
    /**
     * Add a single track to the end of the playlist
     */
    addItem: (successCallback: SuccessCallback, errorCallback: ErrorCallback, trackItem: AudioTrack) => void;
    /**
     * Adds the list of tracks to the end of the playlist.
     */
    addAllItems: (successCallback: SuccessCallback, errorCallback: ErrorCallback, items: AudioTrack[]) => void;
    /**
     * Removes a track from the playlist. If this is the currently playing item, the next item will automatically begin playback.
     */
    removeItem: (successCallback: SuccessCallback, errorCallback: ErrorCallback, removeItem: AudioTrackRemoval) => void;
    /**
     * Removes all given tracks from the playlist; these can be specified either by trackId or trackIndex. If the removed items
     * include the currently playing item, the next available item will automatically begin playing.
     */
    removeItems: (successCallback: SuccessCallback, errorCallback: ErrorCallback, items: AudioTrackRemoval[]) => void;
    /**
     * Clear the entire playlist. This will result in the STOPPED event being raised.
     */
    clearAllItems: (successCallback: SuccessCallback, errorCallback: ErrorCallback) => void;
    /**
     * Playback management
     */
    /**
     * Begin playback. If no tracks have been added, this has no effect.
     */
    play: (successCallback: SuccessCallback, errorCallback: ErrorCallback) => void;
    /**
     * Play the track at the given index. If the track does not exist, this has no effect.
     */
    playTrackByIndex: (successCallback: SuccessCallback, errorCallback: ErrorCallback, index: number) => void;
    /**
     * Play the track matching the given trackId. If the track does not exist, this has no effect.
     */
    playTrackById: (successCallback: SuccessCallback, errorCallback: ErrorCallback, trackId: string) => void;
    /**
     * Pause playback
     */
    pause: (successCallback: SuccessCallback, errorCallback: ErrorCallback) => void;
    /**
     * Skip to the next track. If you are already at the end, and loop is false, this has no effect.
     * If you are at the end, and loop is true, playback will begin at the beginning of the playlist.
     */
    skipForward: (successCallback: SuccessCallback, errorCallback: ErrorCallback) => void;
    /**
     * Skip to the previous track. If you are already at the beginning, this has no effect.
     */
    skipBack: (successCallback: SuccessCallback, errorCallback: ErrorCallback) => void;
    /**
     * Seek to the given position in the currently playing track. If the value exceeds the track length,
     * the track will complete and playback of the next track will begin.
     */
    seekTo: (successCallback: SuccessCallback, errorCallback: ErrorCallback, position: number) => void;
    /**
     * (iOS only): Seek to the given position in the *entire queue of songs*.
     * Not implemented on Android since the Android player does not load track durations until the item
     * begins playback. On the TODO list to implement.
     */
    seekToQueuePosition: (successCallback: SuccessCallback, errorCallback: ErrorCallback, position: number) => void;
    /**
     * Set the playback speed; a float value between [-1, 1] inclusive. If set to 0, this pauses playback.
     */
    setPlaybackRate: (successCallback: SuccessCallback, errorCallback: ErrorCallback, rate: number) => void;
    /**
     * Set the playback volume. Float value between [0, 1] inclusive.
     * On both Android and iOS, this sets the volume of the media stream, which can be externally
     * controlled by setting the overall hardware volume.
     */
    setVolume: (successCallback: SuccessCallback, errorCallback: ErrorCallback, volume: number) => void;
    /**
     * Sets a flag indicating whether the playlist should loop back to the beginning once it reaches the end.
     */
    setLoop: (successCallback: SuccessCallback, errorCallback: ErrorCallback, loop: boolean) => void;
    /**
     * Get accessors
     */
    /**
     * Reports the current playback rate.
     */
    getPlaybackRate: (successCallback: SuccessCallback, errorCallback: ErrorCallback) => void;
    /**
     * Reports the current playback volume
     */
    getVolume: (successCallback: SuccessCallback, errorCallback: ErrorCallback) => void;
    /**
     * Reports the playback position of the current item. You are recommended to handle the onStatus events
     * rather than this value, as this value will be stale by the time you receive it.
     */
    getPosition: (successCallback: SuccessCallback, errorCallback: ErrorCallback) => void;
    /**
     * Reports the buffer status of the current item. You are recommended to handle the onStatus events
     * rather than this value, as this value will be stale by the time you receive it.
     */
    getCurrentBuffer: (successCallback: SuccessCallback, errorCallback: ErrorCallback) => void;
    /**
     * (iOS only): Reports the duration of the entire playlist, in seconds (e.g. 4500 seconds for the entire playlist)
     * Not implemented on Android since durations are not known ahead of time.
     */
    getTotalDuration: (successCallback: SuccessCallback, errorCallback: ErrorCallback) => void;
    /**
     * (iOS only): Gets the overall playback position in the entire queue, in seconds (e.g. 1047 seconds).
     * Not implemented on Android since durations are not known ahead of time.
     */
    getQueuePosition: (successCallback: SuccessCallback, errorCallback: ErrorCallback) => void;
}
declare const playerInstance: RmxAudioPlayerBrowser;
/*!
 * AudioPlayer Plugin instance.
 */
export declare const AudioPlayer: RmxAudioPlayerBrowser;
export default playerInstance;
