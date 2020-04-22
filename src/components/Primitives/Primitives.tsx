// Dependencies
import styled from '../../Theme';
import { IButtonProps, ITextProps, Platform } from '../../types';
import { TextProps, TouchableOpacityProps, ViewProps } from 'react-native';
import { getPlatform } from '../../utils/Platform';

const platform = getPlatform();

export const Button: React.FC<IButtonProps> =
  platform === Platform.Native
    ? styled.TouchableOpacity<TouchableOpacityProps>``
    : styled.button<React.HTMLProps<HTMLButtonElement>>``;

export const Text: React.FC<ITextProps> =
  platform === Platform.Native
    ? styled.Text<TextProps>``
    : styled.span<React.HTMLProps<HTMLSpanElement>>``;

export const H1: React.FC<ITextProps> =
  platform === Platform.Native
    ? styled.Text<TextProps>``
    : styled.h1<React.HTMLProps<HTMLHeadingElement>>``;

export const H2: React.FC<ITextProps> =
  platform === Platform.Native
    ? styled.Text<TextProps>``
    : styled.h2<React.HTMLProps<HTMLHeadingElement>>``;

export const H3: React.FC<ITextProps> =
  platform === Platform.Native
    ? styled.Text<TextProps>``
    : styled.h3<React.HTMLProps<HTMLHeadingElement>>``;

export const H4: React.FC<ITextProps> =
  platform === Platform.Native
    ? styled.Text<TextProps>``
    : styled.h4<React.HTMLProps<HTMLHeadingElement>>``;

export const H5: React.FC<ITextProps> =
  platform === Platform.Native
    ? styled.Text<TextProps>``
    : styled.h5<React.HTMLProps<HTMLHeadingElement>>``;

export const H6: React.FC<ITextProps> =
  platform === Platform.Native
    ? styled.Text<TextProps>``
    : styled.h6<React.HTMLProps<HTMLHeadingElement>>``;

export const Paragraph: React.FC<ITextProps> =
  platform === Platform.Native
    ? styled.Text<TextProps>``
    : styled.p<React.HTMLProps<HTMLParagraphElement>>``;

export const Span: React.FC<ITextProps> =
  platform === Platform.Native
    ? styled.Text<TextProps>``
    : styled.span<React.HTMLProps<HTMLSpanElement>>``;

export const I: React.FC<ITextProps> =
  platform === Platform.Native
    ? styled.Text<TextProps>``
    : styled.i<React.HTMLProps<HTMLUnknownElement>>``;