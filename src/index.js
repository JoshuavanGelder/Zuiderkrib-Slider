import { registerBlockType } from '@wordpress/blocks';
import './styles/style.scss';
import edit from './edit';
import save from './save';
import {settings, meta, name} from './slide';

registerBlockType( 'slider/zuiderkrib-slider', {
	attributes: {
		sliderAutoSlide: {
			type: 'boolean',
			default: true
		},
		autoSlideCooldown: {
			type: 'number',
			default: 2
		},
		sliderSlidesPerView: {
			type: 'number',
			default: 1
		},
		align: {
			type: 'string',
			default: 'full'
		}
	},
	edit,
	save,
} );

registerBlockType( { name, ...meta }, settings );