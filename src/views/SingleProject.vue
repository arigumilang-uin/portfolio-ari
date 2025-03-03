<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';
import projects from '@/data/projects.js';

export default {
	name: 'SingleProject',
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
		ProjectRelatedProjects,
	},
	props: ['id'],
	data() {
		return {
			project: null,
		};
	},
	created() {
		// Ambil data proyek yang sesuai dengan ID dari URL
		this.project = projects.find(p => p.id === this.id);
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
	<div v-if="project" class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="{
			singleProjectTitle: project.title,
			singleProjectDate: project.date,
			singleProjectTag: project.category
		}" />

		<!-- Project gallery -->
		<ProjectGallery :projectImages="project.images" />

		<!-- Project information -->
		<ProjectInfo :projectInfo="{
			clientHeading: 'About Client',
			companyInfos: project.companyInfos,
			objectivesHeading: 'Objective',
			objectivesDetails: project.description,
			technologies: [{ title: 'Tools & Technologies', techs: project.tools }],
			projectDetailsHeading: 'Challenge',
			projectDetails: project.details,
			socialSharingsHeading: 'Share This',
			socialSharings: [
				{ id: 1, name: 'Twitter', icon: 'twitter', url: 'https://twitter.com/' },
				{ id: 2, name: 'Instagram', icon: 'instagram', url: 'https://instagram.com/' },
				{ id: 3, name: 'Facebook', icon: 'facebook', url: 'https://facebook.com/' },
				{ id: 4, name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com/' },
				{ id: 5, name: 'YouTube', icon: 'youtube', url: 'https://youtube.com/' }
			]
		}" />

		<!-- Project related projects -->
		<ProjectRelatedProjects :relatedProject="{
			relatedProjectsHeading: 'Related Projects',
			relatedProjects: project.related
		}" />
	</div>
	<div v-else>
		<p class="text-center text-red-500">Project not found</p>
	</div>
</template>

<style scoped></style>
