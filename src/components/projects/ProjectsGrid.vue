<script>
import feather from 'feather-icons';
import ProjectsFilter from './ProjectsFilter.vue';
import projects from '../../data/projects';

export default {
	// eslint-disable-next-line vue/no-unused-components
	components: { ProjectsFilter },
	data() {
		return {
			projects: projects,
			projectsHeading: 'My Projects Portfolio',
			selectedCategory: '',
			searchProject: '',
		};
	},
	computed: {
		// Ambil kategori unik dari daftar proyek
		categories() {
			const allCategories = this.projects.map(p => p.category);
			return [...new Set(allCategories)];
		},
		// Filter proyek berdasarkan kategori atau pencarian
		filteredProjects() {
			return this.projects.filter(project => {
				const matchesSearch = this.searchProject
					? project.title.toLowerCase().includes(this.searchProject.toLowerCase())
					: true;
				const matchesCategory = this.selectedCategory
					? project.category === this.selectedCategory
					: true;
				return matchesSearch && matchesCategory;
			});
		},
	},
	mounted() {
		feather.replace();
	},
};
</script>

<template>
	<section class="pt-10 sm:pt-14">
		<!-- Projects grid title -->
		<div class="text-center">
			<p class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light">
				{{ projectsHeading }}
			</p>
		</div>

		<!-- Filter and search projects -->
		<div class="mt-10 sm:mt-10">
			<h3 class="font-general-regular text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl font-normal mb-4">
				Search projects by title or filter by category
			</h3>
			<div class="flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-2">
				<!-- Search Bar -->
				<div class="flex justify-between gap-2 w-1/2">
					<span class="hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer">
						<i data-feather="search" class="text-ternary-dark dark:text-ternary-light"></i>
					</span>
					<input
						v-model="searchProject"
						class="font-general-medium pl-3 pr-1 sm:px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light w-full"
						type="search"
						placeholder="Search Projects"
					/>
				</div>

				<!-- Filter Dropdown -->
				<select
					v-model="selectedCategory"
					class="font-general-medium px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light w-1/2"
				>
					<option value="">All Projects</option>
					<option v-for="category in categories" :key="category" :value="category">
						{{ category }}
					</option>
				</select>
			</div>
		</div>

		<!-- Projects grid -->
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
			<router-link
				v-for="project in filteredProjects"
				:key="project.id"
				:to="'/projects/' + project.id"
				class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
				aria-label="Single Project"
			>
				<div>
					<img :src="project.img" :alt="project.title" class="rounded-t-xl border-none w-full h-56 object-cover" />
				</div>
				<div class="text-center px-4 py-6">
					<p class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2">
						{{ project.title }}
					</p>
					<span class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light">
						{{ project.category }}
					</span>
				</div>
			</router-link>
		</div>
	</section>
</template>

<style scoped></style>
