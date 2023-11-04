import {ObservableArray} from "../../collections/ObservableArray";
export interface ICollectionView  {

    /**
     * Gets a value that indicates whether this view supports filtering via the
     * @see:filter property.
     */
    canFilter: boolean;
    /**
     * Gets a value that indicates whether this view supports grouping via the
     * @see:groupDescriptions property.
     */
    canGroup: boolean;
    /**
     * Gets a value that indicates whether this view supports sorting via the
     * @see:sortDescriptions property.
     */
    canSort: boolean;
    /**
     * Gets the current item in the view.
     */
    currentItem: any;
    /**
     * Gets the ordinal position of the current item in the view.
     */
    currentPosition: number;
    /**
     * Gets or sets a callback used to determine if an item is suitable for
     * inclusion in the view.
     *
     * NOTE: If the filter function needs a scope (i.e. a meaningful 'this'
     * value), then remember to set the filter using the 'bind' function to
     * specify the 'this' object. For example:
     * <pre>
     *   collectionView.filter = this._filter.bind(this);
     * </pre>
     */
  //  filter: IPredicate;
    /**
     * Gets a collection of @see:GroupDescription objects that describe how the
     * items in the collection are grouped in the view.
     */
    groupDescriptions: ObservableArray;
    /**
     * Gets the top-level groups.
     */
    groups: any[];
    /**
     * Gets a value that indicates whether this view contains no items.
     */
    isEmpty: boolean;
    /**
     * Gets a collection of @see:SortDescription objects that describe how the items
     * in the collection are sorted in the view.
     */
    sortDescriptions: ObservableArray;
    /**
     * Gets or sets the collection object from which to create this view.
     */
    sourceCollection: any;
    /**
     * Gets the filtered, sorted, grouped items in the view.
     */
    items: any[];


}
