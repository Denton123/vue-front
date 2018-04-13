export default {
	editComponent: [
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
	]
}
