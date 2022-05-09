import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save( props ) {
	const { attributes } = props;
	const { sliderSlidesPerView, sliderAutoSlide, autoSlideCooldown } = attributes;

	const SliderSettings = `
	jQuery(document).ready(function( $ ) {
		$(".owl-carousel").owlCarousel({
			loop:true,
			margin:16,
			nav:true,
			autoplay:${sliderAutoSlide},
			autoplayTimeout:${autoSlideCooldown * 1000},
			autoplayHoverPause:true,
			mouseDrag:false,
			navText:["<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='15 18 9 12 15 6'/></svg>","<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='9 18 15 12 9 6'/></svg>"],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:${sliderSlidesPerView}
				}
			}
		})
	});
	`;

	return (
		<div { ...useBlockProps.save() } >
			<div className="owl-carousel">
				<InnerBlocks.Content />
			</div>
			<script dangerouslySetInnerHTML={{__html: SliderSettings}}></script>
		</div>
	);
}