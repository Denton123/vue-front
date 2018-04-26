export default {
	questionComponent: [
		{
			type: 'text',
			label: '标题',
			placeholder: '问题标题',
			name: 'title',
			rules: [{required: true, trigger: 'blur', message: '在5到19个数'}]
		},
		{
			type: 'editor',
			label: '内容',
			placeholder: '问题内容',
			name: 'content',
			rules: null
		}
	],
	articleComponent: [
		{
			type: 'text',
			label: '标题',
			placeholder: '问题标题',
			name: 'title',
			rules: [{required: true, trigger: 'blur', message: '在5到19个数'}]
		},
		{
			type: 'editor',
			label: '内容',
			placeholder: '问题内容',
			name: 'test',
			rules: null
		}
	],
	ideaComponent: [
		{
			type: 'text',
			label: 'hhhhhh',
			placeholder: '问题标题',
			name: 'title',
			rules: [{required: true, trigger: 'blur', message: '在5到19个数'}]
		},
		{
			type: 'editor',
			label: '内容',
			placeholder: '问题内容',
			name: 'content',
			rules: null
		}
	],
}
