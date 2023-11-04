//import {DateTime} from "../core/index";
import {asArray} from "../core/index";
//import {Event} from "../event/Event";
//import {EventArgs} from "../eventArgs/EventArgs";
//import {CancelEventArgs} from "../eventArgs/CancelEventArgs";
//import {assert, asFunction, asBoolean, clamp, isPrimitive, tryCast, asArray, asInt} from "../core/index";
import {ObservableArray} from "./ObservableArray";
//import {IEditableCollectionView} from "../collections/interface/IEditableCollectionView";
//import {IPagedCollectionView} from "../collections/interface/IPagedCollectionView";
//import {INotifyCollectionChanged} from "../collections/interface/INotifyCollectionChanged";
//import {IPredicate} from "../collections/interface/IPredicate";
import {ICollectionView} from "../collections/interface/ICollectionView";
//import {GroupDescription} from "./GroupDescription";
//import {NotifyCollectionChangedEventArgs} from "./eventArgs/NotifyCollectionChangedEventArgs";
//import {PageChangingEventArgs} from "./eventArgs/PageChangingEventArgs";
//import {SortDescription} from "./SortDescription";
//import {NotifyCollectionChangedAction} from "../enum/collections/NotifyCollectionChangedAction";
//import {CollectionViewGroup} from "./CollectionViewGroup";
import {EventEmitter} from "@angular/core";
import {$$observable} from "rxjs/symbol/observable";
import {Observable, Subscriber} from "rxjs/Rx";


export class CollectionView /*extends Observable  ICollectionView*/ {
    _src: any[];
  /*  _ncc: INotifyCollectionChanged;    
	*/
	_view: any[];
    _pgView: any[];
    /*_groups: CollectionViewGroup[];
    _fullGroups: CollectionViewGroup[];
    _digest: string;
    _idx           = -1;
    _filter: IPredicate;
    _srtDsc        = new ObservableArray();
    _grpDesc       = new ObservableArray();
    _newItem       = null;
    _edtItem       = null;
    _edtClone: any;
    _pgSz          = 0;
    _pgIdx         = 0;
    _updating      = 0;
    _itemCreator: Function;
    _canFilter     = true;
    _canGroup      = true;
    _canSort       = true;
    _canAddNew     = true;
    _canCancelEdit = true;
    _canRemove     = true;
    _canChangePage = true;
    _trackChanges  = false;
    _chgAdded      = new ObservableArray();
    _chgRemoved    = new ObservableArray();
    _chgEdited     = new ObservableArray();
    _srtCvt: Function;
*/
    /**
     * Initializes a new instance of a @see:CollectionView.
     *
     * @param sourceCollection Array that serves as a source for this
     * @see:CollectionView.
     */
    constructor(sourceCollection?: any) {

      console.log("collection_view","constructor");
        // initialize the source collection
        this.sourceCollection = sourceCollection ? sourceCollection : new ObservableArray();
    }

  
/**
     * Gets items in the view.
     */
    get items(): any[] {
        return this._pgView;
    }
   
    get sourceCollection(): any {
        return this._src;
    }

    set sourceCollection(sourceCollection: any) {
        if (sourceCollection != this._src) {
			console.log("collection_view","connect new source");
			// connect new source
			this._src = asArray(sourceCollection, false);
			this.refresh();
		}
    }

	refresh() {
		console.log("collection_view","perform the refresh");
		// perform the refresh
        this._performRefresh();
	}
	_performRefresh() {
	 this._view = this._src; // don't waste time cloning
		this._pgView = this._getPageView();
	}
	 // gets the list that corresponds to the current page
    _getPageView() {

        // not paging? return the whole view
      
            return this._view;
        

       
    }
}
