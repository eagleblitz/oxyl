const music = Oxyl.modScripts.music;
exports.cmd = new Oxyl.Command("resume", async message => {
	let manager = music.getManager(message.channel.guild);
	if(!manager) {
		return "There is currently no music playing";
	} else if(!manager.voiceCheck(message.member)) {
		return "You must be listening to music to use this command";
	} else if(!manager.connection.paused) {
		return "The music is not paused";
	} else {
		manager.resume();
		return "Music resumed :play_pause:";
	}
}, {
	guildOnly: true,
	type: "music",
	description: "Resume the music in your channel"
});
