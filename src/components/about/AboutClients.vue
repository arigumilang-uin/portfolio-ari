<script>
import AboutClientSingle from './AboutClientSingle.vue';

export default {
	components: {
		AboutClientSingle,
	},
	data: () => {
		return {
			clientsHeading: 'I am learning to code here',
			clients: [
				{
					id: 1,
					title: 'UIN SUSKA Riau',
					img: require('@/assets/images/brands/uin.png'),
				},
				{
					id: 2,
					title: 'HIMATIF',
					img: require('@/assets/images/brands/himatif.png'),
				},
				{
					id: 2,
					title: 'class A',
					img: require('@/assets/images/brands/classA.png'),
				},
				{
					id: 3,
					title: 'Dicoding',
					img: require('@/assets/images/brands/dicoding.png'),
				},

			],
		};
	},
};
</script>

<template>
	<div class="mt-10 sm:mt-20">
		<p
			class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
		>
			{{ clientsHeading }}
		</p>
		<div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
			<AboutClientSingle
				v-for="client in clients"
				:key="client.id"
				:client="client"
			/>
		</div>
	</div>
</template>
