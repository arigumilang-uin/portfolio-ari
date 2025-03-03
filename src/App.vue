<script>
import feather from 'feather-icons';
import AppHeader from './components/shared/AppHeader';
import AppFooter from './components/shared/AppFooter';

export default {
	components: {
		AppHeader,
		AppFooter,
	},
	data: () => {
		return {
			appTheme: localStorage.getItem('theme'),
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
	<div :class="appTheme" class="pt-0.5">
		<!-- App header -->
		<AppHeader />

		<!-- Render active component contents with vue transition -->
		<transition name="fade" mode="out-in">
			<router-view :theme="appTheme" />
		</transition>

		<!-- Scroll to top -->
		<back-to-top
			visibleoffset="500"
			right="30px"
			bottom="20px"
			class="shadow-lg"
		>
			<i data-feather="chevron-up"></i>
		</back-to-top>

		<!-- App footer -->
		<AppFooter />
	</div>
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
}

.vue-back-to-top {
		padding: 0.5rem;
		background-color: #6366F1; /* bg-indigo-500 */
		color: white; /* text-white */
		transition: background-color 0.5s ease-in-out, transform 0.5s ease-in-out;
		border-radius: 50%;
		font-size: 22px;
		line-height: 22px;
	}
	
	.vue-back-to-top:hover {
		background-color: #4F46E5; /* hover:bg-indigo-600 */
		transform: translateY(-0.25rem) scale(1.1); /* hover:-translate-y-1 hover:scale-110 */
	border-radius: 50%;
	font-size: 22px;
	line-height: 22px;
}

.fade-enter-active {
	animation: coming 0.4s;
	animation-delay: 0.2s;
	opacity: 0;
}

.fade-leave-active {
	animation: going 0.4s;
}

@keyframes going {
	from {
		transform: translateX(0);
	}

	to {
		transform: translateX(-10px);
		opacity: 0;
	}
}

@keyframes coming {
	from {
		transform: translateX(-10px);
		opacity: 0;
	}

	to {
		transform: translateX(0px);
		opacity: 1;
	}
}
</style>
