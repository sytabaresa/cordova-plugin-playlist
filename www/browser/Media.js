"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AudioPlayer = exports.RmxAudioPlayerBrowser = void 0;

var _RmxAudioPlayer2 = require("../RmxAudioPlayer");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var exec = typeof cordova !== 'undefined' ? cordova.require('cordova/exec') : null; // const channel = typeof cordova !== 'undefined' ? cordova.require('cordova/channel') : null;

var log = console;
/**
 * AudioPlayer class implementation. A singleton of this class is exported for use by Cordova,
 * but nothing stops you from creating another instance. Keep in mind that the native players
 * are in fact singletons, so the only thing the separate instance gives you would be
 * separate onStatus callback streams.
 */

var RmxAudioPlayerBrowser =
/*#__PURE__*/
function (_RmxAudioPlayer) {
  _inherits(RmxAudioPlayerBrowser, _RmxAudioPlayer);

  function RmxAudioPlayerBrowser() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RmxAudioPlayerBrowser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RmxAudioPlayerBrowser)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setOptions", function (successCallback, errorCallback, options) {
      _this.options = _objectSpread({}, _this.options, options); //exec(successCallback, errorCallback, 'RmxAudioPlayer', 'setOptions', [options]);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setPlaylistItems", function (successCallback, errorCallback, items, options) {} //exec(successCallback, errorCallback, 'RmxAudioPlayer', 'setPlaylistItems', [this.validateTracks(items), options || {}]);

    /**
     * Add a single track to the end of the playlist
     */
    );

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addItem", function (successCallback, errorCallback, trackItem) {
      var validTrackItem = _this.validateTrack(trackItem);

      if (!validTrackItem) {
        return errorCallback(new Error('Provided track is null or not an audio track'));
      } //exec(successCallback, errorCallback, 'RmxAudioPlayer', 'addItem', [validTrackItem]);

    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addAllItems", function (successCallback, errorCallback, items) {} //exec(successCallback, errorCallback, 'RmxAudioPlayer', 'addAllItems', [this.validateTracks(items)]);

    /**
     * Removes a track from the playlist. If this is the currently playing item, the next item will automatically begin playback.
     */
    );

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "removeItem", function (successCallback, errorCallback, removeItem) {
      if (!removeItem) {
        return errorCallback(new Error('Track removal spec is empty'));
      }

      if (!removeItem.trackId && !removeItem.trackIndex) {
        return errorCallback(new Error('Track removal spec is invalid'));
      } //exec(successCallback, errorCallback, 'RmxAudioPlayer', 'removeItem', [removeItem.trackIndex, removeItem.trackId]);

    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "removeItems", function (successCallback, errorCallback, items) {} //exec(successCallback, errorCallback, 'RmxAudioPlayer', 'removeItems', [items]);

    /**
     * Clear the entire playlist. This will result in the STOPPED event being raised.
     */
    );

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clearAllItems", function (successCallback, errorCallback) {} //exec(successCallback, errorCallback, 'RmxAudioPlayer', 'clearAllItems', []);

    /**
     * Playback management
     */

    /**
     * Begin playback. If no tracks have been added, this has no effect.
     */
    );

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "play", function (successCallback, errorCallback) {} //exec(successCallback, errorCallback, 'RmxAudioPlayer', 'play', []);

    /**
     * Play the track at the given index. If the track does not exist, this has no effect.
     */
    );

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "playTrackByIndex", function (successCallback, errorCallback, index) {} //exec(successCallback, errorCallback, 'RmxAudioPlayer', 'playTrackByIndex', [index]);

    /**
     * Play the track matching the given trackId. If the track does not exist, this has no effect.
     */
    );

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "playTrackById", function (successCallback, errorCallback, trackId) {} //exec(successCallback, errorCallback, 'RmxAudioPlayer', 'playTrackById', [trackId]);

    /**
     * Pause playback
     */
    );

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "pause", function (successCallback, errorCallback) {} //exec(successCallback, errorCallback, 'RmxAudioPlayer', 'pause', []);

    /**
     * Skip to the next track. If you are already at the end, and loop is false, this has no effect.
     * If you are at the end, and loop is true, playback will begin at the beginning of the playlist.
     */
    );

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "skipForward", function (successCallback, errorCallback) {} //exec(successCallback, errorCallback, 'RmxAudioPlayer', 'skipForward', []);

    /**
     * Skip to the previous track. If you are already at the beginning, this has no effect.
     */
    );

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "skipBack", function (successCallback, errorCallback) {} //exec(successCallback, errorCallback, 'RmxAudioPlayer', 'skipBack', []);

    /**
     * Seek to the given position in the currently playing track. If the value exceeds the track length,
     * the track will complete and playback of the next track will begin.
     */
    );

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "seekTo", function (successCallback, errorCallback, position) {} //exec(successCallback, errorCallback, 'RmxAudioPlayer', 'seekTo', [position]);

    /**
     * (iOS only): Seek to the given position in the *entire queue of songs*.
     * Not implemented on Android since the Android player does not load track durations until the item
     * begins playback. On the TODO list to implement.
     */
    );

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "seekToQueuePosition", function (successCallback, errorCallback, position) {} //exec(successCallback, errorCallback, 'RmxAudioPlayer', 'seekToQueuePosition', [position]);

    /**
     * Set the playback speed; a float value between [-1, 1] inclusive. If set to 0, this pauses playback.
     */
    );

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setPlaybackRate", function (successCallback, errorCallback, rate) {} //exec(successCallback, errorCallback, 'RmxAudioPlayer', 'setPlaybackRate', [rate]);

    /**
     * Set the playback volume. Float value between [0, 1] inclusive.
     * On both Android and iOS, this sets the volume of the media stream, which can be externally
     * controlled by setting the overall hardware volume.
     */
    );

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setVolume", function (successCallback, errorCallback, volume) {} //exec(successCallback, errorCallback, 'RmxAudioPlayer', 'setPlaybackVolume', [volume]);

    /**
     * Sets a flag indicating whether the playlist should loop back to the beginning once it reaches the end.
     */
    );

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setLoop", function (successCallback, errorCallback, loop) {} //exec(successCallback, errorCallback, 'RmxAudioPlayer', 'setLoopAll', [!!loop]);

    /**
     * Get accessors
     */

    /**
     * Reports the current playback rate.
     */
    );

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getPlaybackRate", function (successCallback, errorCallback) {} //exec(successCallback, errorCallback, 'RmxAudioPlayer', 'getPlaybackRate', []);

    /**
     * Reports the current playback volume
     */
    );

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getVolume", function (successCallback, errorCallback) {} //exec(successCallback, errorCallback, 'RmxAudioPlayer', 'getPlaybackVolume', []);

    /**
     * Reports the playback position of the current item. You are recommended to handle the onStatus events
     * rather than this value, as this value will be stale by the time you receive it.
     */
    );

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getPosition", function (successCallback, errorCallback) {} //exec(successCallback, errorCallback, 'RmxAudioPlayer', 'getPlaybackPosition', []);

    /**
     * Reports the buffer status of the current item. You are recommended to handle the onStatus events
     * rather than this value, as this value will be stale by the time you receive it.
     */
    );

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getCurrentBuffer", function (successCallback, errorCallback) {} //exec(successCallback, errorCallback, 'RmxAudioPlayer', 'getCurrentBuffer', []);

    /**
     * (iOS only): Reports the duration of the entire playlist, in seconds (e.g. 4500 seconds for the entire playlist)
     * Not implemented on Android since durations are not known ahead of time.
     */
    );

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getTotalDuration", function (successCallback, errorCallback) {} //exec(successCallback, errorCallback, 'RmxAudioPlayer', 'getTotalDuration', []);

    /**
     * (iOS only): Gets the overall playback position in the entire queue, in seconds (e.g. 1047 seconds).
     * Not implemented on Android since durations are not known ahead of time.
     */
    );

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getQueuePosition", function (successCallback, errorCallback) {//exec(successCallback, errorCallback, 'RmxAudioPlayer', 'getQueuePosition', []);
    });

    return _this;
  }

  return RmxAudioPlayerBrowser;
}(_RmxAudioPlayer2.RmxAudioPlayer);

exports.RmxAudioPlayerBrowser = RmxAudioPlayerBrowser;
var playerInstance = new RmxAudioPlayerBrowser();
/*!
 * AudioPlayer Plugin instance.
 */

var AudioPlayer = playerInstance;
exports.AudioPlayer = AudioPlayer;
var _default = playerInstance; // keep typescript happy

exports.default = _default;