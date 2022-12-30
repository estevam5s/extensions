interface Emoji {
	readonly emoji: any;
	readonly description: any;
}

let EmojiLog: Array<Emoji> = [
	{
		emoji: "💥 new",
		description: 'Add something entirely new.',
	},
	{
		emoji: "👌 improve",
		description: 'Improve piece of code like refactoring.',
	},
	{
		emoji: "🐛 fix bug",
		description: 'Fix a bug — need I say more?',
	},
	{
		emoji: "📖 doc update",
		description: 'Anything documentation related.',
	},
	{
		emoji: "🚀 release new version",
		description: 'Release a new version.',
	},
	{
		emoji: "🎉 initial commit",
		description: 'initial commit ',
	},
	{
		emoji: "✨ new feature",
		description: 'New Feature in the development',
	},
	{
		emoji: "✅ add test case",
		description: 'Adding tests',
	},
	{
		emoji: "✔️ make test pass",
		description: 'defined tests passed ',
	},
	{
		emoji: "⚡ general update and improvement",
		description: 'general Update',
	},
	{
		emoji: "🎨 improve structure / format of the code",
		description: 'improved formatting and structure',
	},
	{
		emoji: "🔒 security fix",
		description: 'security features added',
	},
	{
		emoji: "🔨 refactoring code production",
		description: 'refactoring code',
	},
	{
		emoji: "➖ remooving a dependency or a file in the project on package.json",
		description: 'removing dependency from the project',
	},
	{
		emoji: "➕ Adding a dependency or a file in the project on package.json",
		description: 'adding new dependency for the project',
	},
	{
		emoji: "👌 code review",
		description: 'code review changes ',
	},
	{
		emoji: "🚧 work in progress (WIP)",
		description: 'working on specific issue/bug ',
	},
	{
		emoji: "🚑 critical hotfix",
		description: 'critical Hotfix',
	},
	{
		emoji: "🚀 deploy new version to production",
		description: 'Deploying stuff',
	},
	{
		emoji: "📈 tracking code",
		description: 'tracking code or analytics',
	},
	{
		emoji: "⏪ revert changes",
		description: 'Reverting changes',
	},
	{
		emoji: "🔀 merge branch into master or develop",
		description: 'Merging branches',
	},
	{
		emoji: "💩 need to improve",
		description: 'Bad Code / needs improv',
	},
	{
		emoji: "📦 config files or packages added",
		description: 'Changes in config files (package.json, pom.xml) ',
	},
	{
		emoji: "👽 code from external source",
		description: 'Update code due to external API changes.'
	},
	{
		emoji: "🚚 rename/move files or folders related to the project",
		description: 'Move or rename files.',
	},
	{
		emoji: "📄 licence",
		description: 'Add or update license.',
	},
	{
		emoji: "🍱 assets",
		description: 'Add or update assets.',
	},
	{
		emoji: "♿️ accessibility",
		description: 'Improve accessibility.',
	},
	{
		emoji: "💡 commenting",
		description: "Add or update comments in source code.",
	},
	{
		emoji: ":card_file_box: database",
		description: 'Perform database related changes.',
	},
	{
		emoji: "💬 text literals",
		description: 'Add or update text and literals.',
	},
	{
		emoji: "👥 contributors list",
		description: 'Add or update contributor(s).',
	},
	{
		emoji: ":building_construction: changes that affect the build system or external dependencies",
		description: 'Make architectural changes.',
	},
	{
		emoji: "📱 design",
		description: 'Work on responsive design.',
	},
	{
		emoji: "📸 snapshots",
		description: 'Add or update snapshots',
	},
	{
		emoji: "🙈 gitignore ignore files",
		description: 'Add or update a .gitignore file',
	},
	{
		emoji: ":alembic: experiment new feature",
		description: 'Experiment new things',
	},
	{
		emoji: "🥅 try catch block added",
		description: 'Catching errors',
	},
	{
		emoji: "✏️ fix typo",
		description: 'Fix typos.',
	},
	{
		emoji: "⬇️ dependencies",
		description: 'Downgrade dependencies.',
	},
	{
		emoji: "⬆️ dependencies",
		description: 'Upgrade dependencies.',
	},
	{
		emoji: "👷 ci/cd for github actions or circleci",
		description: 'Add or update CI build system.',
	},
	{
		emoji: "💄 update the UI and style files",
		description: 'Add or update the UI and style files.',
	},
	{
		emoji: ":wastebasket: cleaning code",
		description: 'Removing deprecated code.'
	},
	{
		emoji: "🔧 configuration files",
		description: 'Add or update configuration files.',
	},
	{
		emoji: "🚧 work in progress",
		description: 'Work in progress.',
	},
	{
		emoji: "🚧 work in progress (WIP)",
		description: 'Work in progress.',
	},
	{
		emoji: "👓 need to review",
		description: 'Need code review.',
	},
	{
		emoji: "💕 thanks for the code",
		description: 'Thanks for the code.',
	},
	{
		emoji: "🐛 bug fix related to the project",
		description: 'Fix a bug.',
	},
	{
		emoji: "🐞 bug fix related to the project",
		description: 'Fix a bug.',
	},
	{
		emoji: "🐳 docker related",
		description: 'Work about Docker.',
	},
	{
		emoji: "📝 documentation related to the project and the code",
		description: 'Add or update documentation.',
	},
	{
		emoji: "🚸 UX/UI",
		description: 'Improve user experience / usability.',
	},
	{
		emoji: "🥶 cache related to the project",
		description: 'Add or update caching.',
	},
	{
		emoji: "🏗️ infrastructure related to the project",
		description: 'Make infrastructure changes.',
	},
	{
		emoji: "🎶 audio related to the project",
		description: 'Add or update audio.',
	},
	{
		emoji: "📹 video related to the project",
		description: 'Add or update video.',
	},
	{
		emoji: "🔊 logging related to the project",
		description: 'Add or update logs.',
	},
	{
		emoji: "🔇 logging related to the project",
		description: 'Add or update logs.',
	},
	{
		emoji: "🔍 search related to the project",
		description: 'Add or update search.',
	},
	{
		emoji: "🏷️ version tag related to the project",
		description: 'Add or update version tag.',
	},
	{
		emoji: "🚸 accessibility related to the project",
		description: 'Improve accessibility.',
	},
	{
		emoji: "👹 security related to the project",
		description: 'Fix security issues.',
	},
	{
		emoji: "🤬 hate code",
		description: 'Hate code.',
	},
	{
		emoji: "🤯 mind blown",
		description: 'Mind blown.',
	},
	{
		emoji: "🤔 thinking",
		description: 'Thinking.',
	}
];
export default EmojiLog;
