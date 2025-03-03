<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'Hi, My name is Ari Gumilang, a student of Informatics Engineering at UIN Suska Riau, currently in my 4th semester. I have a strong passion for technology and software development, with a particular interest in programming and web development. I am constantly learning and exploring new technologies to expand my skills, and I believe that the tech industry offers endless opportunities to innovate and create solutions that can positively impact society.'},
				{
					id: 2,
					bio:
						'Outside of my studies, I enjoy collaborating on various campus projects and working in teams to bring ideas to life. Im always looking to improve both my technical skills and teamwork abilities. As I continue my journey in the field of technology, I am excited about the potential to grow, learn, and contribute to the tech community.',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/profile.jpeg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
