import { PanelBody } from "@wordpress/components";
import { SlidesPerView } from "./setting/slidesPerView";
import { AutoSlide } from "./setting/autoSlide";

export const SliderSettings = ({
	sliderSlidesPerView,
	sliderAutoSlide,
	autoSlideCooldown,
	setAttributes,
}) => (
	<PanelBody title="Slider Settings" initialOpen={false}>
		<SlidesPerView sliderSlidesPerView={sliderSlidesPerView} setAttributes={setAttributes} />
		<AutoSlide sliderAutoSlide={sliderAutoSlide} autoSlideCooldown={autoSlideCooldown} setAttributes={setAttributes} />
	</PanelBody>
);