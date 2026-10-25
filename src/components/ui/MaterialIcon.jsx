import {
  Package,
  Factory,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  ShoppingBag,
  Eye,
  Grid2X2,
  Boxes,
  Verified,
  Sprout,
  Truck,
  CreditCard,
  Globe,
  Clock,
  CheckCircle2,
  BellRing,
  Soup,
  Check,
  Wheat,
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
  verified: Verified,
  agriculture: Sprout,
  local_shipping: Truck,
  payments: CreditCard,
  public: Globe,
  schedule: Clock,
  check_circle: CheckCircle2,
  notifications_active: BellRing,
  soup_kitchen: Soup,
  check: Check,
  wheat: Wheat,
};

export default function MaterialIcon({
  name,
  size = 24,
  className = "",
  ...props
}) {
  const Icon = icons[name];

  if (!Icon) {
    if (import.meta.env.DEV) {
      console.warn(`MaterialIcon: unknown icon "${name}"`);
    }

    return null;
  }

  return (
    <Icon
      size={size}
      className={className}
      aria-hidden="true"
      {...props}
    />
  );
}
