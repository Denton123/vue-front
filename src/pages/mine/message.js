import card from './child-component/card.vue'
export default {
	tag: [
		{
			label: '回答',
			name: 'answer',
			cardComponent: card,
			blankIcon: 'el-icon-tickets'
		},
		{
			label: '提问',
			name: 'question',
			cardComponent: card,
			blankIcon: 'el-icon-document',
	        popFlag: true
		},
		{
			label: '文章',
			name: 'article',
			cardComponent: card,
			blankIcon: 'el-icon-news',
	        popFlag: true
		},
		{
			label: '专栏',
			name: 'column',
			cardComponent: card,
			blankIcon: 'el-icon-menu'
		},
		{
			label: '想法',
			name: 'idea',
			cardComponent: card,
			blankIcon: 'el-icon-loading',
	        popFlag: true
		},
		{
			label: '音乐',
			name: 'music',
			cardComponent: card,
			blankIcon: 'el-icon-loading',
	        popFlag: true
		},
		{
			label: '乐器',
			name: 'instrument',
			cardComponent: card,
			blankIcon: 'el-icon-news',
			popFlag: true
		},
	],
	extractTag: [
		{
			label: 'Live',
			name: 'live',
			imgIcon: 'live'
		},
		{
			label: '书店',
			name: 'book',
			imgIcon: 'book'
		},
		{
			label: '一个',
			name: 'one',
			imgIcon: 'one',
			toUrl: 'one'
		},
		{
			label: '影音',
			name: 'video',
			imgIcon: 'video'
		},
		{
			label: '音乐',
			name: 'music',
			imgIcon: 'music',
			toUrl: 'music'
		}
	]
}
