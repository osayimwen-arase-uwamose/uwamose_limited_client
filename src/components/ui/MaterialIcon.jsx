import {
  Package, Factory, Menu, X, ChevronLeft, ChevronRight, ShoppingCart,
  ShoppingBag, Eye, Grid2X2, Boxes, BadgeCheck, Sprout, Truck, CreditCard,
  Globe, Clock, CircleCheck, BellRing, Soup, Check, Wheat, ArrowRight,
  Mail, Phone, MapPin
} from "lucide-react";

const icons = {
  package_2: Package,
  factory: Factory,
  menu: Menu,
  close: X,
  chevron_left: ChevronLeft,
  chevron_right: ChevronRight,
  add_shopping_cart: ShoppingCart,
  shopping_bag: ShoppingBag,
  visibility: Eye,
  grid_view: Grid2X2,
  inventory_2: Boxes,
  verified: BadgeCheck,
  agriculture: Sprout,
  local_shipping: Truck,
  payments: CreditCard,
  public: Globe,
  schedule: Clock,
  check_circle: CircleCheck,
  notifications_active: BellRing,
  soup_kitchen: Soup,
  check: Check,
  wheat: Wheat,
  arrow_right: ArrowRight,
  mail: Mail,
  phone: Phone,
  location: MapPin,
};

export default function MaterialIcon({ name, size = 24, className = "", ...props }) {
  const Icon = icons[name];
  if (!Icon) {
    if (import.meta.env.DEV) console.warn(`MaterialIcon: unknown icon "${name}"`);
    return null;
  }
  return <Icon size={size} className={className} aria-hidden="true" {...props} />;
}
