import type { FC } from 'react';
import type { SvgProps } from 'react-native-svg';

import { IconNameEnum } from './icon-name.enum';

import AboutIcon from '@assets/svg/about.svg';
import AccountIcon from '@assets/svg/account.svg';
import ACRepairIcon from '@assets/svg/acrepair.svg';
import AddressIcon from '@assets/svg/address.svg';
import AgreeCheck from '@assets/svg/agree_check.svg';
import ApplianceIcon from '@assets/svg/appliance.svg';
import ArrowDown from '@assets/svg/arrow_down.svg';
import ArrowLeft from '@assets/svg/arrow_left.svg';
import ArrowRight from '@assets/svg/arrow_right.svg';
import ArrowUp from '@assets/svg/arrow_up.svg';
import BeautyIcon from '@assets/svg/beauty.svg';
import BellIcon from '@assets/svg/bell.svg';
import BookingsIcon from '@assets/svg/bookings.svg';
import CleaningIcon from '@assets/svg/cleaning.svg';
import CloseIcon from '@assets/svg/close.svg';
import Confirmation from '@assets/svg/confirmation.svg';
import CrossSquareIcon from '@assets/svg/cross-square.svg';
import DegreeCheck from '@assets/svg/degree_check.svg';
import DoneIcon from '@assets/svg/done.svg';
import ElectronicsIcon from '@assets/svg/electronics.svg';
import Erase from '@assets/svg/erase.svg';
import ExploreIcon from '@assets/svg/explore.svg';
import EyeClose from '@assets/svg/eye_close.svg';
import EyeOpen from '@assets/svg/eye_open.svg';
import FacebookIcon from '@assets/svg/facebook.svg';
import FavoriteIcon from '@assets/svg/favorite.svg';
import FeedBackIcon from '@assets/svg/feedback.svg';
import FilterIcon from '@assets/svg/filter.svg';
import GoogleIcon from '@assets/svg/google.svg';
import HelpIcon from '@assets/svg/help.svg';
import HomeIcon from '@assets/svg/home.svg';
import InboxIcon from '@assets/svg/inbox.svg';
import Information from '@assets/svg/information.svg';
import LaundryIcon from '@assets/svg/laundry.svg';
import Level from '@assets/svg/level.svg';
import LocationIcon from '@assets/svg/location.svg';
import LogoutIcon from '@assets/svg/logout.svg';
import MarkAddressIcon from '@assets/svg/mark-address.svg';
import NewsFeedIcon from '@assets/svg/news_feed.svg';
import NotificationDotIcon from '@assets/svg/notification_dot.svg';
import Occupation from '@assets/svg/occupation.svg';
import PaintingIcon from '@assets/svg/painting.svg';
import PasswordHideIcon from '@assets/svg/password_hide.svg';
import PaymentMethodIcon from '@assets/svg/payment_method.svg';
import PlumbingIcon from '@assets/svg/plumbing.svg';
import PrivacyPolicyIcon from '@assets/svg/privacy_policy.svg';
import ProfileIcon from '@assets/svg/profile.svg';
import QrScannerIcon from '@assets/svg/qr_scanner.svg';
import RepairingIcon from '@assets/svg/repairing.svg';
import SaveIcon from '@assets/svg/save.svg';
import SearchIcon from '@assets/svg/search.svg';
import SettingIcon from '@assets/svg/setting.svg';
import ShareIcon from '@assets/svg/share.svg';
import ShiftingIcon from '@assets/svg/shifting.svg';
import StarsIcon from '@assets/svg/stars.svg';
import TagIcon from '@assets/svg/tag.svg';
import VehicleIcon from '@assets/svg/vehicle.svg';
import VerifiedEmailIcon from '@assets/svg/verified_email.svg';
import WalletIcon from '@assets/svg/wallet.svg';
import WifiOnlineIcon from '@assets/svg/wifi_connected.svg';
import WifiOffIcon from '@assets/svg/wifi_off.svg';

export const iconNameMap: Record<IconNameEnum, FC<SvgProps>> = {
  [IconNameEnum.ArrowLeft]: ArrowLeft,
  [IconNameEnum.ArrowRight]: ArrowRight,
  [IconNameEnum.ArrowUp]: ArrowUp,
  [IconNameEnum.ArrowDown]: ArrowDown,
  [IconNameEnum.DoneIcon]: DoneIcon,
  [IconNameEnum.CrossSquareIcon]: CrossSquareIcon,
  [IconNameEnum.VerifiedEmailIcon]: VerifiedEmailIcon,
  [IconNameEnum.PasswordHideIcon]: PasswordHideIcon,
  [IconNameEnum.WifiOffIcon]: WifiOffIcon,
  [IconNameEnum.WifiOnlineIcon]: WifiOnlineIcon,
  [IconNameEnum.FacebookIcon]: FacebookIcon,
  [IconNameEnum.GoogleIcon]: GoogleIcon,
  [IconNameEnum.AgreeCheck]: AgreeCheck,
  [IconNameEnum.DegreeCheck]: DegreeCheck,
  [IconNameEnum.EyeClose]: EyeClose,
  [IconNameEnum.EyeOpen]: EyeOpen,
  [IconNameEnum.Erase]: Erase,
  [IconNameEnum.Information]: Information,
  [IconNameEnum.Occupation]: Occupation,
  [IconNameEnum.Level]: Level,
  [IconNameEnum.Confirmation]: Confirmation,
  [IconNameEnum.Home]: HomeIcon,
  [IconNameEnum.Save]: SaveIcon,
  [IconNameEnum.Bookings]: BookingsIcon,
  [IconNameEnum.Profile]: ProfileIcon,
  [IconNameEnum.Inbox]: InboxIcon,
  [IconNameEnum.NotificationDot]: NotificationDotIcon,
  [IconNameEnum.Bell]: BellIcon,
  [IconNameEnum.QrScanner]: QrScannerIcon,
  [IconNameEnum.Search]: SearchIcon,
  [IconNameEnum.Filter]: FilterIcon,
  [IconNameEnum.NewsFeed]: NewsFeedIcon,
  [IconNameEnum.Cleaning]: CleaningIcon,
  [IconNameEnum.Repairing]: RepairingIcon,
  [IconNameEnum.Painting]: PaintingIcon,
  [IconNameEnum.Laundry]: LaundryIcon,
  [IconNameEnum.Appliance]: ApplianceIcon,
  [IconNameEnum.Plumbing]: PlumbingIcon,
  [IconNameEnum.Shifting]: ShiftingIcon,
  [IconNameEnum.Beauty]: BeautyIcon,
  [IconNameEnum.ACRepair]: ACRepairIcon,
  [IconNameEnum.Vehicle]: VehicleIcon,
  [IconNameEnum.Electronics]: ElectronicsIcon,
  [IconNameEnum.Account]: AccountIcon,
  [IconNameEnum.Address]: AddressIcon,
  [IconNameEnum.PaymentMethod]: PaymentMethodIcon,
  [IconNameEnum.Help]: HelpIcon,
  [IconNameEnum.PrivacyPolicy]: PrivacyPolicyIcon,
  [IconNameEnum.Wallet]: WalletIcon,
  [IconNameEnum.Setting]: SettingIcon,
  [IconNameEnum.About]: AboutIcon,
  [IconNameEnum.FeedBack]: FeedBackIcon,
  [IconNameEnum.Logout]: LogoutIcon,
  [IconNameEnum.Explore]: ExploreIcon,
  [IconNameEnum.Close]: CloseIcon,
  [IconNameEnum.Location]: LocationIcon,
  [IconNameEnum.Stars]: StarsIcon,
  [IconNameEnum.MarkAddress]: MarkAddressIcon,
  [IconNameEnum.Tag]: TagIcon,
  [IconNameEnum.Share]: ShareIcon,
  [IconNameEnum.Favorite]: FavoriteIcon,
};
