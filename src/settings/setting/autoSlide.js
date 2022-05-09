import { TextControl, CheckboxControl  } from "@wordpress/components"

export const AutoSlide = ({
	autoSlideCooldown,
	sliderAutoSlide,
	setAttributes,
}) => {
	return (
		<>
		<CheckboxControl
			label="Automatisch door sliden"
			help="Only visible on the page and not in the editor"
			checked={ sliderAutoSlide || false }
			onChange={ ( value ) => setAttributes( { sliderAutoSlide: value } ) }
			/>
		{
			sliderAutoSlide === true && 
			<TextControl
			label="Seconden voordat hij naar de volgende slide gaat"
			help="Only visible on the page and not in the editor"
			type="number"
			min="0.1"
			value={ autoSlideCooldown || 0 }
			onChange={ ( value ) => setAttributes( { autoSlideCooldown: parseInt( value ) } ) }
			/>
		}
	</>
		)
};