module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		// Avoid errror when import react-native-gesture-handler, react-native-reanimated
		plugins: ['@babel/plugin-proposal-export-namespace-from', 'react-native-reanimated/plugin'],
	};
};
